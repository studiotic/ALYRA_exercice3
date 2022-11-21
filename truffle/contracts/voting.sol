// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

/// @title voting program
/// @author Sébastien HOFF
/// @notice this programm allow you to create a simple voting system

contract Voting is Ownable {
    /// @notice winningProposalID is a publicn umber dedicated to contain the winner proposal ID
    /// @dev winningProposalID is a public uint256 whith a get to knwow the winner proposal ID. the get return a number beetween 1 and the number of proposal. Each vote, the setVote function evaluate le winningProposalID
    uint256 public winningProposalID;

    /// @notice the voter structure contains all the voters and their informations
    /// @dev isRegitred is checked when the voter isRegistred. HasVoted is check when the voter has vote. votedProposalId is the proposal id he votes
    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint256 votedProposalId;
    }

    /// @notice the Proposal structure contains all the proposal
    /// @dev string contain the name of the proposal. voteCount conain sthe number of vote for this proposal. This number is reviewed each time a voter votes for this proposal
    struct Proposal {
        string description;
        uint256 voteCount;
    }

    /// @notice the WorkflowStatus contains the 6 phases of the voting programm
    enum WorkflowStatus {
        RegisteringVoters,
        ProposalsRegistrationStarted,
        ProposalsRegistrationEnded,
        VotingSessionStarted,
        VotingSessionEnded,
        VotesTallied
    }

    WorkflowStatus public workflowStatus;

    Proposal[] proposalsArray;

    /// @notice associaion beetween a voter and his adress
    /// @dev this mapping associate the voter and his adress
    mapping(address => Voter) voters;

    /// @notice The events used in the programm
    /// @dev VoterRegistered is sent when a new voter is registred
    event VoterRegistered(address voterAddress);

    /// @notice The events used in the programm
    /// @dev WorkflowStatusChange is sent when the status changes
    event WorkflowStatusChange(
        WorkflowStatus previousStatus,
        WorkflowStatus newStatus
    );

    /// @notice The events used in the programm
    /// @dev ProposalRegistered is sent when the a new proposal is registred
    event ProposalRegistered(uint256 proposalId);

    /// @notice The events used in the programm
    /// @dev Voted is sent when the a new vote id done
    event Voted(address voter, uint256 proposalId);

    modifier onlyVoters() {
        require(voters[msg.sender].isRegistered, "You're not a voter");
        _;
    }

    // on peut faire un modifier pour les états

    // ::::::::::::: GETTERS ::::::::::::: //

    /// @notice getVoter
    /// @dev get the Voter info with his adress
    /// @param _addr voter's address
    /// @return voter informations
    function getVoter(address _addr)
        external
        view
        onlyVoters
        returns (Voter memory)
    {
        return voters[_addr];
    }

    /// @notice getOneProposal
    /// @dev get the information of one proposal info with its id
    /// @param _id of the proposal
    /// @return proposal informations
    function getOneProposal(uint256 _id)
        external
        view
        onlyVoters
        returns (Proposal memory)
    {
        return proposalsArray[_id];
    }

    // ::::::::::::: REGISTRATION ::::::::::::: //

    /// @notice addVoter
    /// @dev add a voter to the voting system and emit an event when it's done
    /// @param _addr of the voter

    function addVoter(address _addr) external onlyOwner {
        require(
            workflowStatus == WorkflowStatus.RegisteringVoters,
            "Voters registration is not open yet"
        );
        require(voters[_addr].isRegistered != true, "Already registered");

        voters[_addr].isRegistered = true;
        emit VoterRegistered(_addr);
    }

    // ::::::::::::: PROPOSAL ::::::::::::: //

    /// @notice addProposal
    /// @dev add a proposal of voting and emit an event when it's done
    /// @param _desc : the proposal (string)

    function addProposal(string calldata _desc) external onlyVoters {
        require(
            workflowStatus == WorkflowStatus.ProposalsRegistrationStarted,
            "Proposals are not allowed yet"
        );
        require(
            keccak256(abi.encode(_desc)) != keccak256(abi.encode("")),
            "Vous ne pouvez pas ne rien proposer"
        ); // facultatif
        // voir que desc est different des autres

        Proposal memory proposal;
        proposal.description = _desc;
        proposalsArray.push(proposal);
        emit ProposalRegistered(proposalsArray.length - 1);
    }

    // ::::::::::::: VOTE ::::::::::::: //

    /// @notice setVote
    /// @dev add a vote and emit an event when it's done
    /// @param _id : the id of the proposal

    function setVote(uint256 _id) external onlyVoters {
        require(
            workflowStatus == WorkflowStatus.VotingSessionStarted,
            "Voting session havent started yet"
        );
        require(voters[msg.sender].hasVoted != true, "You have already voted");
        require(_id < proposalsArray.length, "Proposal not found"); // pas obligé, et pas besoin du >0 car uint

        voters[msg.sender].votedProposalId = _id;
        voters[msg.sender].hasVoted = true;
        proposalsArray[_id].voteCount++;

        if (
            proposalsArray[_id].voteCount >
            proposalsArray[winningProposalID].voteCount
        ) {
            winningProposalID = _id;
        }

        emit Voted(msg.sender, _id);
    }

    // ::::::::::::: STATE ::::::::::::: //

    /// @notice startProposalsRegistering
    /// @dev start the proposal registering phase (owner only)

    function startProposalsRegistering() external onlyOwner {
        require(
            workflowStatus == WorkflowStatus.RegisteringVoters,
            "Registering proposals cant be started now"
        );
        workflowStatus = WorkflowStatus.ProposalsRegistrationStarted;

        Proposal memory proposal;
        proposal.description = "GENESIS";
        proposalsArray.push(proposal);

        emit WorkflowStatusChange(
            WorkflowStatus.RegisteringVoters,
            WorkflowStatus.ProposalsRegistrationStarted
        );
    }

    /// @notice endProposalsRegistering
    /// @dev end the proposal registering phase (owner only)

    function endProposalsRegistering() external onlyOwner {
        require(
            workflowStatus == WorkflowStatus.ProposalsRegistrationStarted,
            "Registering proposals havent started yet"
        );
        workflowStatus = WorkflowStatus.ProposalsRegistrationEnded;
        emit WorkflowStatusChange(
            WorkflowStatus.ProposalsRegistrationStarted,
            WorkflowStatus.ProposalsRegistrationEnded
        );
    }

    /// @notice startVotingSession
    /// @dev start the voting phase (owner only)

    function startVotingSession() external onlyOwner {
        require(
            workflowStatus == WorkflowStatus.ProposalsRegistrationEnded,
            "Registering proposals phase is not finished"
        );
        workflowStatus = WorkflowStatus.VotingSessionStarted;
        emit WorkflowStatusChange(
            WorkflowStatus.ProposalsRegistrationEnded,
            WorkflowStatus.VotingSessionStarted
        );
    }

    /// @notice endVotingSession
    /// @dev end the voting phase (owner only)

    function endVotingSession() external onlyOwner {
        require(
            workflowStatus == WorkflowStatus.VotingSessionStarted,
            "Voting session havent started yet"
        );
        workflowStatus = WorkflowStatus.VotingSessionEnded;
        emit WorkflowStatusChange(
            WorkflowStatus.VotingSessionStarted,
            WorkflowStatus.VotingSessionEnded
        );
    }

    /// @notice tallyVotes
    /// @dev start the tally vote (owner only)

    function tallyVotes() external onlyOwner {
        require(
            workflowStatus == WorkflowStatus.VotingSessionEnded,
            "Current status is not voting session ended"
        );

        workflowStatus = WorkflowStatus.VotesTallied;
        emit WorkflowStatusChange(
            WorkflowStatus.VotingSessionEnded,
            WorkflowStatus.VotesTallied
        );
    }
}
