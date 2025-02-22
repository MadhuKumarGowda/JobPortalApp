import React, {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularjobCard  from '../../common/cards/popular/PopularJobCard'

import useFetch from '../../../hook/useFetch'


const Popularjobs = () => {
  const route = useRouter();

  const { data, isLoading, error} = useFetch('search', {query: "React Developer", num_pages: 1 })
  //console.log(data)

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
     route.push(`/job-details/${item.job_id}`);
     setSelectedJob(item.job_id);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
      </View>
     <View style={styles.cardsContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" colors={COLORS.primary} />
      ) : error ? (
        <Text> Something Went Wrong</Text>
      ) : <FlatList data = {data}
        renderItem={({item})=>(
          <PopularjobCard item={item} selectedJob={selectedJob} handleCardPress={handleCardPress}/>
        )}
        keyExtractor={item => item?.job_id}
        contentContainerStyle = {{columnGap: SIZES.medium}}
        horizontal
      />}
     </View>
    </View>
  )
}

export default Popularjobs