import React, { useState, useEffect } from "react";
import "./App.scss";
import Input from "./Input";
import Copy from "./Copy";
import Options from "./Options";
const App = () => {
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [passLength, setPassLength] = useState(8);
  const [generatedPass, setGeneratedPass] = useState("");

  const generate_pass = () => {
    const arrayforLength = Array.from(Array(passLength).keys());
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const alphanumbers =
      "1234567890ABCDEFGHIJKLMNOPQ1234567890RSTUVWXYZabcde1234567890fghijklmnopqrstuvwxyz";
    const alphasymbols =
      "!@#$%^&*(ABCDEF!@%^&*GHIJKLMNOPQRSTUVWXY!@#$%^&*Zabcdefg!@#$%^hijklmno!@#$%^&*pqrstuvwxyz)?;";
    const allcombined =
      "!@#$%^&*1234567890(ABCDEF132526GHIJKLM!@#$%^&*NOPQR2351STUVWXYZab1234567890cdefghi%^#^&@&jklm513512nopqrst,.0938y4<>{}uvwx1234567890yz)?;";
    let genned_pass = "";
    //only alphabets
    if (!includeNumbers && !includeSymbols) {
      for (let i = 0; i < passLength; i++) {
        const RandomIndex = Math.floor(Math.random() * alphabets.length);
        genned_pass += alphabets[RandomIndex];
        setGeneratedPass(genned_pass);
      }
    }
    // numbers included
    if (includeNumbers && !includeSymbols) {
      for (let i = 0; i < passLength; i++) {
        const RandomIndex = Math.floor(Math.random() * alphanumbers.length);
        genned_pass += alphanumbers[RandomIndex];
        setGeneratedPass(genned_pass);
      }
    }
    //symbols included
    if (!includeNumbers && includeSymbols) {
      for (let i = 0; i < passLength; i++) {
        const RandomIndex = Math.floor(Math.random() * alphasymbols.length);
        genned_pass += alphasymbols[RandomIndex];
        setGeneratedPass(genned_pass);
      }
    }

    // all_combined
    if (includeNumbers && includeSymbols) {
      for (let i = 0; i < passLength; i++) {
        const RandomIndex = Math.floor(Math.random() * allcombined.length);
        genned_pass += allcombined[RandomIndex];
        setGeneratedPass(genned_pass);
      }
    }
  };

  useEffect(() => {
    generate_pass();
  }, [includeNumbers, includeSymbols, passLength]);

  const handleIncludeNumbersChange = () => {
    setIncludeNumbers(!includeNumbers);
  };

  const handleIncludeSymbolsChange = () => {
    setIncludeSymbols(!includeSymbols);
  };

  const handlePassLengthChange = (e) => {
    setPassLength(e.target.value);
    generate_pass();
  };

  return (
    <div className="App">
      <h1 className="heading_title">
        Password <span>Generator 😎</span>
      </h1>
      <div className="fields">
        <Input generatedPass={generatedPass} />
        <Copy generatedPass={generatedPass} />
      </div>
      <div className="optionss">
        <Options
          handleIncludeNumbersChange={handleIncludeNumbersChange}
          handleIncludeSymbolsChange={handleIncludeSymbolsChange}
          handlePassLengthChange={handlePassLengthChange}
          passLength={passLength}
        />
      </div>
    </div>
  );
};

export default App;
