import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";
import Ionicons from "@expo/vector-icons/Ionicons";

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  const { handlePasswordVisibility, passwordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <View style={styles.inputTextContainer}>
        <TextInput
          style={[styles.input, isInvalid && styles.inputInvalid]}
          autoCapitalize="none"
          keyboardType={keyboardType}
          secureTextEntry={passwordVisibility}
          onChangeText={onUpdateValue}
          value={value}
        />
        {secure && (
          <Pressable onPress={handlePasswordVisibility}>
            <Ionicons name={rightIcon} size={22} color="#232323" />
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 4,
  },
  labelInvalid: {
    color: GlobalStyles.colors.error500,
  },
  inputTextContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.primary100,
    alignItems: "center",
    borderRadius: 4,
  },
  input: {
    width: "90%",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  inputInvalid: {
    backgroundColor: GlobalStyles.colors.error100,
  },
});
