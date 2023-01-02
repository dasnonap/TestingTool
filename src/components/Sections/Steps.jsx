import React from "react";
import Shell from "../UI/Shell";
import Step from "./Step";

const steps = [
    {
        title: '1. Create an Account',
        content: [
            'Creating a free account is required before you start testing your site and server.',
            'The registration process is simple, fast and secure.',
            'The service is completely free of charge and no payments are required for creating your account.',
        ],
        button: {
            'link' : 'sign-up',
            'text': ' Create an Account',
        },
        aside_image: 'https://via.placeholder.com/450X500',
    },
    {
        title: '2. Generate API Key',
        content: [
            'After logging into the system. Navigate to the Keys section.',
            "Then after add your sites' URL and simply Generate a new API key.",
        ],
        aside_image: 'https://via.placeholder.com/450X500'
    },
    {
        title: ' 3. Upload the file',
        content: [
            'After generating the key, you will need to upload the provided file to your web server.',
            'This step is required in order for the functionality to work.',
        ],
        aside_image: 'https://via.placeholder.com/450X500',
    },
    {
        title: '4. Start the Test',
        content: [
            'After uploading the file, you can begin testing!',
            'Navigate the tab Test, and choose which test would you like to be performed.'
        ],
        aside_image: 'https://via.placeholder.com/450X500',
    },
    {
        title: '5. Evaluate the test',
        content: [
            'After the tests are complete, a new report will be created.',
            'In the report you will find all of the information regarding your tests',
        ],
        aside_image: 'https://via.placeholder.com/450X500',
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