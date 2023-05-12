import { StyleSheet, View } from "react-native";
import colors from "../assets/colors";
import CategoryMenu from "../components/CategoryMenu";
import Screen from "../components/Screen";

export default function SemesterListScreen() {
    return (
        <Screen style={styles.screen}>
            <CategoryMenu title={"Semester 1"} onPress={() => console.log("test")} />
            <CategoryMenu title={"Semester 2"} onPress={() => console.log("test")} />
            <CategoryMenu title={"Semester 3"} onPress={() => console.log("test")} />
            <CategoryMenu title={"Semester 4"} onPress={() => console.log("test")} />
            <CategoryMenu title={"Semester 5"} onPress={() => console.log("test")} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.background,
        flex: 1
    }
});