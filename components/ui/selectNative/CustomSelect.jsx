import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import FontSizes from "../../../styles/fontSize";
import { scale, verticalScale } from "react-native-size-matters";
import SelectDropdown from "react-native-select-dropdown";
const InputLabelSelect = ({
  onChange,

  options,
  defaultValue,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <SelectDropdown
          data={
            options || [
              {
                title: "Active",
                icon: "emoticon-frown-outline",
                value: "active",
              },
              {
                title: "Inactive",
                icon: "emoticon-frown-outline",
                value: "inactive",
              },
            ]
          }
          defaultValue={{
            title: defaultValue,
            icon: "emoticon-frown-outline",
            value: defaultValue,
          }}
          onSelect={(selectedItem, index) => {
            onChange(selectedItem?.value);
            console.log(selectedItem?.value, index);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text
                  style={{
                    ...styles.dropdownButtonTxtStyle,
                    fontFamily: "Satoshi-Regular",
                    fontSize: FontSizes.S,
                    color: selectedItem ? "gray" : "gray",
                  }}
                >
                  {(selectedItem && selectedItem.title) ||
                    (defaultValue && defaultValue) ||
                    "Select"}
                </Text>
                <Text style={styles.dropdownButtonArrowStyle}>▼</Text>
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected
                    ? { backgroundColor: "#6053C1" }
                    : { backgroundColor: "#222222" }),
                }}
              >
                <Text
                  style={{
                    ...styles.dropdownItemTxtStyle,
                    ...(isSelected
                      ? {
                          color: "white",
                          fontSize: FontSizes.L,
                          fontFamily: "Satoshi-Regular",
                        }
                      : {
                          color: "white",
                          fontSize: FontSizes.L,
                          fontFamily: "Satoshi-Regular",
                        }),
                  }}
                >
                  {item.title}
                </Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      </View>
    </View>
  );
};

export default InputLabelSelect;

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    height: verticalScale(26),
    borderRadius: scale(2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(10),
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: FontSizes.L,
    color: "white",
  },
  dropdownButtonArrowStyle: {
    fontSize: FontSizes.S,
    color: "gray",
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: scale(12),
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#E2BF59",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  container: {
    width: "100%",
  },
  label: {
    color: "#787878",
    fontFamily: "Satoshi-Regular",
    fontSize: FontSizes.M,
  },
  input: {
    fontFamily: "Satoshi-Regular",
    color: "white",

    borderBottomWidth: 1,
    borderColor: "#6053C1",
    fontSize: FontSizes.L,
  },
});
