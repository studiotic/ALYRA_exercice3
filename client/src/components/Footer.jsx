function Link({ uri, text }) {
  return <a href={uri} target="_blank" rel="noreferrer">{text}</a>;
}

function Footer() {
  return (
    <footer>
      <br></br>
      <h3>More resources</h3>
      <Link uri={"https://github.com/studiotic/ALYRA_exercice3"} text={"Mon GITHUB"} />
      <Link uri={"https://reactjs.org"} text={"React"} />
      <Link uri={"https://soliditylang.org"} text={"Solidity"} />
      <Link uri={"https://ethereum.org"} text={"Ethereum"} />
    </footer >
  );
}

export default Footer;
