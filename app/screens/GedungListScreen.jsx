import { StyleSheet } from "react-native";

import colors from "../assets/colors";
import CategoryMenu from "../components/CategoryMenu";
import Screen from "../components/Screen";

export default function GedungListScreen() {
    return (
        <Screen style={styles.screen}>
            <CategoryMenu title={'G.K. Terpadu 1'}  />
            <CategoryMenu title={'G.K. Terpadu 2 '}  />
            <CategoryMenu title={'Gedung Lab MIF '}  />
            <CategoryMenu title={'Gedung Akuntansi'}  />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.background,
        flex: 1
    }
});