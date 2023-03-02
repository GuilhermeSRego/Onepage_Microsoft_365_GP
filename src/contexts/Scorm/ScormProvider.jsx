import { SCORM } from "pipwerks-scorm-api-wrapper";
import { ScormContext } from "./ScormContext";


export default function ScormProvider({ children }) {

  const scorm = {
    init() {
      SCORM.version = '1.2';
      SCORM.init();

        if(SCORM.version === '1.2') {
          SCORM.set("cmi.core.score.min", "0");
          SCORM.set("cmi.core.score.max", "100");
          SCORM.set("cmi.core.score.raw", "0");
          SCORM.set("cmi.core.lesson_status", 'incomplete');
        } else {
          SCORM.set("cmi.score.min", "0");
          SCORM.set("cmi.score.max", "100");
          SCORM.set("cmi.score.raw", "0");
          SCORM.set("cmi.completion_status", 'incomplete');
        }
      },
      getLearnerName() {
        if(SCORM.version === '1.2') {
          return SCORM.get("cmi.core.student_name")
        } else {
          return SCORM.get("cmi.learner_name")
        }
      },
      getScore() {
        if(SCORM.version === '1.2') {
          return SCORM.get("cmi.core.score.raw")
        } else {
          return SCORM.get("cmi.score.raw")
        }
      },
      setScore(percentual) {
        if(SCORM.version === '1.2') {
          SCORM.set("cmi.core.score.raw", percentual.toString());
          SCORM.set("cmi.core.lesson_status", (parseInt(percentual) >= 99 ? "completed" : "incomplete"));
        } else {
          SCORM.set("cmi.score.raw", percentual.toString());
          SCORM.set("cmi.completion_status", (parseInt(percentual) >= 99 ? "completed" : "incomplete"));
        }
      },
      getStatus() {
        if(SCORM.version === '1.2') {
          return SCORM.get("cmi.core.lesson_status")
        } else {
          return SCORM.get("cmi.completion_status")
        }
      },
      finish() {
        console.log("you have finished!");
        SCORM.save();
      },
    };
  
    window.onunload = window.onbeforeunload = () => {
      scorm.finish()
    }
  
    return (
        <ScormContext.Provider value={{ scorm }}>
            { children }
        </ScormContext.Provider>
    )
  }