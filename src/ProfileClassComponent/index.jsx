import React from "react";
import Row from "../Row";
import LocalContext from "../context/local";
import ThemeContext from "../context/theme";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '谢凯',
            company: '百度',
            department: '企业智能平台部'
        };
    }


    render() {
        return <ThemeContext.Consumer>
            {theme => {
                <LocalContext.Consumer>
                    {local => {
                        <section>
                            <Row label="姓名">
                                
                            </Row>
                            <Row label="公司">
                                <input value={this.state.company} />
                            </Row>
                            <Row label="部门">
                                <input value={this.state.department} />
                            </Row>
                        </section>
                    }}
                </LocalContext.Consumer>
            }}
        </ThemeContext.Consumer>
    
    }
}