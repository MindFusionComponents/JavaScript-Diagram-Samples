import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MinApp from './MinApp';
import Anchors from './Anchors';
import Inheritance from './Inheritance';
import FractalLayout from './FractalLayout';
import Controls from './Controls';

class Sample extends React.Component {
    constructor(props) {
        super(props);

        this.samples = {
            "MinApp": MinApp,
            "Anchors" : Anchors,
            "Inheritance" : Inheritance,
            "FractalLayout" : FractalLayout,
            "Controls" : Controls
        };

        this.state = { id: "MinApp" };
    }

    navigate(sampleId) {
        this.setState({ id: sampleId });
    }

    render() {
        const TagName = this.samples[this.state.id];

        return (
            <div>
                <div>
                    <ul className="menu">
                        {Object.keys(this.samples).map((key) => {
                            return (<li className="menu-item" key={key} value={key} onClick={this.navigate.bind(this, key)} >{key}</li>)
                        })
                        }
                    </ul>
                </div>
                <div>
                    <TagName />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Sample id="MinApp" />, document.getElementById('root')
)

