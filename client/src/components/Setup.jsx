function Setup() {

  return (
    <>
      <details>
        <code>
          {`$ cd truffle\n`}
          {`$ truffle migrate --network development\n`}
          <span className="dim-color">
            # The `development` network points to Ganache, it's configured in
            truffle/truffle-config.js on line 45.
          </span>
        </code>
      </details>
    </>
  );
}

export default Setup;
