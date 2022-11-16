import { useRef, useEffect } from "react";

const AddVoterPrint = ({ addressVotant }) => {

    const spanEle = useRef(null);

    useEffect(() => {
        spanEle.current.classList.add("flash");
        const flash = setTimeout(() => {
            spanEle.current.classList.remove("flash");
        }, 300);
        return () => {
            clearTimeout(flash);
        };
    }, [addressVotant]);

    return (
        <code>
            Confirmation ! : Vous avez bien ajouter le votant {addressVotant}
        </code>
    );

};

export default AddVoterPrint;
