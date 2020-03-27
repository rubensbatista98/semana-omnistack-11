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

  headerText: {
    fontSize: 15,
    color: "#737380"
  },

  headerTextBold: {
    fontWeight: "bold"
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#13131a",
    marginBottom: 16,
    marginTop: 48
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380"
  },

  incidentsList: {
    marginTop: 32
  },

  incident: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 24,
    marginBottom: 16
  },

  incidentProperty: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#41414d"
  },

  incidentValue: {
    fontSize: 15,
    color: "#737380",
    marginTop: 8,
    marginBottom: 24
  },

  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  detailsButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#e02041"
  }
});
