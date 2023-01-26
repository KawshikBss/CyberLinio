import { BaseToast } from "react-native-toast-message";

const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: '#6C4AB6', backgroundColor: '#B9E0FF' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
          color: '#6C4AB6'
        }}
      />
    ),
};

export default toastConfig;
