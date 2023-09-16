import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

const Nearbyjobs = () => {
    const router = useRouter();
    // const isLoadign = false;
    // const error = false;

    const { data, isLoadign, error } = useFetch("search", {
        query: "react",
        num_pages: 1,
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nearby Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>View All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoadign ? (
                    <ActivityIndicator size='large' color={COLORS.primary} />
                ) : error ? (
                    <Text>Something Went Wrong</Text>
                ) : (
                    data?.map((job) => (
                        <NearbyJobCard
                            key={`nearby-job-${job.job_id}`}
                            job={job}
                            handleNavigate={() => router.push(`/job-details/${job.job_id}}`)}
                            
                        />
                    ))
                )}
            </View>
        </View>
    );
};

export default Nearbyjobs;
