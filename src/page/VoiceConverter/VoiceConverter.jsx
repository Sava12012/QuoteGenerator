import React, { useEffect, useRef, useState, useCallback } from "react";
import "./VoiceConverter.css";
import playBtn from "../../components/assets/voiceConverter/play.png";

const VoiceConverter = () => {
  const textareaRef = useRef();
  const selectRef = useRef();
  const speech = useRef(new SpeechSynthesisUtterance());
  const [voices, setVoices] = useState([]);

  const onButtonClick = useCallback(() => {
    speech.current.text = textareaRef.current.value;
    window.speechSynthesis.speak(speech.current);
  }, []);

  const onSelectChange = useCallback(() => {
    speech.current.voice = voices[selectRef.current.value];
  }, [voices]);

  const onRateChange = useCallback((event) => {
    speech.current.rate = event.target.value;
  }, []);

  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      speech.current.voice = availableVoices[0];

      availableVoices.forEach(
        (voice, i) =>
          (selectRef.current.options[i] = new Option(voice.name, i)),
      );
    };
  }, []);

  return (
    <div className="voiceConverter">
      <div className="headerVoiceConverter">
        Text To Speech <span>Converter</span>
      </div>
      <div className="texteriaConverter">
        <textarea
          ref={textareaRef}
          className="textareaVoice"
          placeholder="Write anything here..."
        ></textarea>
        <div className="rowVoiceConverter">
          <select
            ref={selectRef}
            onChange={onSelectChange}
            className="selectBTN"
          ></select>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            onChange={onRateChange}
          />
          <button className="listenBTN" onClick={onButtonClick}>
            <img src={playBtn} alt="Play button" /> Listen
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceConverter;
