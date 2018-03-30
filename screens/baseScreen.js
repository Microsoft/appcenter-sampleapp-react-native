import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { CodePushComponent } from './codePushComponent';

export class BaseScreen extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        const createButtonView = (buttonProps, marginBottom) => {
            if (buttonProps) {
                const onPress = () => {
                    if (buttonProps.onPress) {
                        buttonProps.onPress();
                    }
                }

                return (
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onPress}>
                            <Text style={styles.buttonText}>{buttonProps.text}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }
        }

        const bottomButtonView = createButtonView(this.props.options.bottomContainer.bottomButton);
        const topButtonView = createButtonView(this.props.options.bottomContainer.topButton);
        let codePushComponent;
        const self = this;
        if (this.props.options.codepush) {
            codePushComponent = <CodePushComponent ref={codepush => { self.codepush = codepush }} />;
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    height: this.props.options.topContainer.height,
                    backgroundColor: this.props.options.topContainer.backgroundColor,
                }} >
                    <Image style={{ width: "100%", height: "100%" }} source={
                        this.props.options.topContainer.imageSource
                    } />
                </View>
                <View style={{
                    flex: 2,
                    backgroundColor: this.props.options.bottomContainer.backgroundColor,
                }} >
                    <Text style={styles.description}>{this.props.options.bottomContainer.description}</Text>
                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 1 }} />
                        {codePushComponent}
                        {topButtonView}
                        {bottomButtonView}
                        <View style={{ height: 40 }} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        flexGrow: 1,
        alignSelf: "center",
        marginTop: 24,
        width: 300,
        color: "white",
        fontSize: 17,
    },
    buttonView: {
        height: 55,
        width: 300,
        alignSelf: "center"
    },
    infoView: {
        height: 100,
        alignSelf: "center",
        borderWidth: 2
    },
    infoViewMessageText: {
        color: "white",
        fontSize: 17,
    },
    infoViewStatusText: {
        color: "white",
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 2,
        backgroundColor: "white",
    },
    buttonText: {
        fontSize: 17,
        color: "black",
    }
});
