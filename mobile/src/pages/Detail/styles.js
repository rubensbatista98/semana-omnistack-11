import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  incident: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
    marginTop: 48
  },

  incidentProperty: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#41414d",
    marginTop: 24
  },

  incidentValue: {
    fontSize: 15,
    color: "#737380",
    marginTop: 8
  },

  contactBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 24,
    marginBottom: 16
  },

  heroTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 30,
    color: "#13131a"
  },

  heroDescription: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16
  },

  action: {
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
    height: 50,
    backgroundColor: "#e02041",
    borderRadius: 8
  },

  actionText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff"
  }
});
