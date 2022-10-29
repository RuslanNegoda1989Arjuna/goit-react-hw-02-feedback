import { BtnFeedback } from './Btn_feedback/Btn_feedback';
import { TitleFeedback } from './Title_Feedback/Title_Feedback';

export const App = () => {
  return (
    <div>
      <TitleFeedback title="Please leave feedback" />
      <BtnFeedback feedback="Good" />
    </div>
  );
};
