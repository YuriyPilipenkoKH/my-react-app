import { Section } from "../components/section/Section";
import { FeedbackOptions } from "../components/FeedbackOptions/FeedbackOptions";
import { colorPickerOptions } from "../data/options";
import { ColorPicker } from "../components/colorPicker/colorPicker";

let state = {
  good: 0,
  neutral: 0,
  bad: 0
}

export const App = () => {
    return (
  
    
<>
<Section title ="Please leave feedback" >
         <FeedbackOptions state ={state}></FeedbackOptions>
        
      </Section>
      <ColorPicker options= {colorPickerOptions}></ColorPicker>
</>
     
    );
  };