import React from "react";
import Shell from "../UI/Shell";
import Step from "./Step";
import step_1 from '../../images/step-1.png';
import step_2 from '../../images/step-2.png';
import step_3 from '../../images/step-3.png';
import step_4 from '../../images/step-4.png';
import step_5 from '../../images/step-5.png';

const steps = [
    {
        title: '1. Create an Account',
        content: [
            'Creating a free account is required before you start testing your site and server.',
            'The registration process is simple, fast and secure.',
            'The service is completely free of charge and no payments are required for creating your account.',
        ],
        button: {
            'link' : 'signup',
            'text': ' Create an Account',
        },
        aside_image: step_1,
    },
    {
        title: '2. Open your dashboard',
        content: [
            'After logging into the system. Navigate to the Sites section.',
        ],
        aside_image: step_2
    },
    {
        title: ' 3. Add your site',
        content: [
            'After opening your dashboard, you can add your site.'
        ],
        aside_image: step_3,
    },
    {
        title: '4. Start the Test',
        content: [
            'Begin testing!'
        ],
        aside_image: step_4,
    },
    {
        title: '5. Evaluate the test',
        content: [
            'After the tests are complete, a new report will be created.',
            'In the report you will find all of the information regarding your tests',
        ],
        aside_image: step_5,
    }
];

const Steps = () =>{
    return(
        <section className="steps">
            <Shell>
                <div className="steps__head">
                    <h2>
                        Start testing in just 5 easy steps
                    </h2>
                </div>

                <div className="steps__items">
                    { steps.map( ( item, index ) => {
                        let stepClass = index % 2 === 0 ? 'step' : 'step step--reversed';

                        return(
                            <div className="steps__item" key={Math.random().toString()}>
                                <Step 
                                    title={item.title}
                                    content={item.content}
                                    button={item.button}
                                    image={item.aside_image}
                                    class={stepClass}
                                />
                            </div>
                        )
                    })}
                </div>
            </Shell>
        </section>
    );
};

export default Steps;