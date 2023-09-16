import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { COLORS, FONTS, icons, images, SIZES } from "../../../constants";
const jobTypes = ["Full Time", "Part Time", "Internship", "Freelance"];

const Welcome = () => {
    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState("Full Time");

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Kemil</Text>
                <Text style={styles.welcomeMessage}>Find your perfect job</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=''
                        onChange={(e) => console.log(e)}
                        placeholder='What are you looking for?'
                        placeholderTextColor={COLORS.gray}
                    />
                </View>

                <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
                    <Image
                        source={icons.search}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={() => {
                                setActiveJobType(item);
                                router.push(`/search/${item}`);
                            }}>
                            <Text style={styles.tabText(activeJobType, item)}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                />
            </View>
        </View>
    );
};

export default Welcome;
