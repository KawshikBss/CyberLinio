import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ImagePopModal = ({ visible, toggle, images, selected }) => {
    const [currImage, setCurrImage] = useState(selected);
    const changeImage = (index) => {
        setCurrImage((curr) => {
            let next = curr + index;
            if (next >= images.length) return 0;
            if (next < 0) return images.length - 1;
            return next;
        });
    };
    return (
        <Modal
            isVisible={visible}
            animationIn={"zoomIn"}
            animationOut={"zoomOut"}
            onBackdropPress={toggle}
            onRequestClose={toggle}
            statusBarTranslucent
            deviceHeight={"100%"}
        >
            <View style={styles.container}>
                <ImageBackground
                    source={{uri: images[currImage].src}}
                    style={styles.slider}
                    imageStyle={styles.sliderImage}
                >
                    <TouchableOpacity
                        style={styles.sliderBtn}
                        onPress={() => changeImage(-1)}
                    >
                        <FontAwesome
                            style={styles.sliderBtnText}
                            name="angle-left"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.sliderBtn}
                        onPress={() => changeImage(1)}
                    >
                        <FontAwesome
                            style={styles.sliderBtnText}
                            name="angle-right"
                        />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.bottom}>
                    {images
                        ? images.map((image, index) => {
                              return (
                                  <TouchableOpacity
                                      key={index}
                                      onPress={() => setCurrImage(index)}
                                  >
                                      <Image
                                          source={{uri: image.src}}
                                          style={styles.sliderImages}
                                          key={index}
                                      />
                                  </TouchableOpacity>
                              );
                          })
                        : ""}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "70%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    slider: {
        flexDirection: "row",
        // flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#FFF",
        height: 260,
        width: "100%",
        resizeMode: "cover",
    },
    sliderBtn: {
        width: 40,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    sliderBtnText: {
        color: "#B9E0FF",
        fontSize: 50,
    },
    sliderImage: {
        borderRadius: 20,
        resizeMode: 'contain',
    },
    bottom: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingVertical: 20,
    },
    sliderImages: {
        height: 70,
        width: 70,
        marginHorizontal: 10,
        borderColor: "#FCF7FF",
        borderWidth: 2,
        borderRadius: 20,
    },
});

export default ImagePopModal;
