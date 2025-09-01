import {StyleSheet, Text, View, ViewStyle} from 'react-native'

const Spacer = ({width = "100%", height = 40}: ViewStyle) => {
  return (
    <View style={{width, height}} />
  );
};

export default Spacer;

const styles = StyleSheet.create({})
