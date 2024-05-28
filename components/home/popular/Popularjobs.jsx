import React from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import styles from './popularjobs.style'

import {useRouter} from 'expo-router'
import {SIZES,COLORS} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hooks/useFetch'

const Popularjobs = () => {
  const router= useRouter();
   const {data,isLoading,error}=useFetch(
    'search',{
      query:'React Developer',
      num_page:'1',
      page: '1',

    }
   )

   console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerTitle}> Popular Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show all</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
          {isLoading?(<ActivityIndicator size={"large"} color={COLORS.primary}/>):error?(
            <Text>Something went wrong</Text>
          ):(
            <FlatList
              data={data}
              renderItem={({item})=>(
                <PopularJobCard item={item}
                // selectedJob={selectedJob}
                // handleCardPress={handleCardPress}

                />
              )}
              keyExtractor={item=>item.job_id}
              horizontal
              contentContainerStyle={{columnGap:SIZES.medium}}
            />
          )}
      </View> 
    </View>
  )
}

export default Popularjobs