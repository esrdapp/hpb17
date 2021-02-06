import React, {Component} from "react";
import {connect} from "react-redux";
import Page from "../site-components/page/Page";
import {Space} from "../components/Space";

class Contact extends Component {
    static mapStateToProps = ({dangerMode}) => ({dangerMode});

    render () {
        return (
        <Page header={<Space danger={this.props.dangerMode}/>} contentClass="full-width">
                                
                <br />
                <br />



			   <div align="left">
                <p>HPB17 Was developed by jeffpUK (jeff@hpb17.com) and jayden (jayden@hpb17.com)- </p>

                <br />
                <br />

                <p>You can also find us both on Telegram (@jeffpUK | @jxden) usually frequenting the HPB_Global Telegram group</p>

                <br />
























                </div>
            </Page>
        )
    }
}

export default connect(Contact.mapStateToProps)(Contact);
