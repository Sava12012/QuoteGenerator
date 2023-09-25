import { useEffect, useRef, useState, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./VoiceConverter.css";
import playBtn from "../../components/assets/voiceConverter/play.png";
import stopBtn from "../../components/assets/voiceConverter/stop.png";

const VoiceConverter = () => {
  const textareaRef = useRef();
  const selectRef = useRef();
  const speech = useRef(new SpeechSynthesisUtterance());
  const [voices, setVoices] = useState([]);
  const [rate, setRate] = useState(1);

  const onButtonClick = useCallback(() => {
    const text = textareaRef.current.value;
    if (text) {
      speech.current.text = text;
      window.speechSynthesis.speak(speech.current);
    } else {
      toast.error("Please enter text");
    }
  }, []);

  const onStopButtonClick = useCallback(() => {
    window.speechSynthesis.cancel();
  }, []);

  const onSelectChange = useCallback(() => {
    speech.current.voice = voices[selectRef.current.value];
  }, [voices]);

  const onRateChange = useCallback((event) => {
    const isSpeaking = window.speechSynthesis.speaking;
    const value = parseFloat(event.target.value);
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      speech.current.rate = value;
      window.speechSynthesis.speak(speech.current);
    } else {
      speech.current.rate = value;
    }
    setRate(value);
  }, []);

  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      speech.current.voice = availableVoices[0];

      availableVoices.forEach(
        (voice, i) => (selectRef.current.options[i] = new Option(voice.name, i))
      );
    };
  }, []);

  return (
    <>
      <ToastContainer />
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
          <div className="inputWrapper">
            <input
              type="range"
              value={rate}
              min="0.1"
              max="1.2"
              step="0.1"
              onChange={onRateChange}
            />
            <output id="rangevalue">{rate.toFixed(1)}</output>
          </div>
          <div className="rowVoiceConverter">
            <select
              ref={selectRef}
              onChange={onSelectChange}
              className="selectBTN"
            ></select>
            <div className="buttonWrapper">
              <button className="listenBTN" onClick={onButtonClick}>
                <img src={playBtn} alt="Play button" /> Listen
              </button>
              <button className="listenBTN" onClick={onStopButtonClick}>
                <img src={stopBtn} alt="Stop button" /> Stop
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoiceConverter;
