import { StyleSheet } from 'react-native'
import React from 'react'
import PessoaListComponent from '../components/PessoaListComponent'

const PessoaListTela = ({navigation}) => {
  return (
    <PessoaListComponent navigation={navigation}/>
  )
}

export default PessoaListTela

const styles = StyleSheet.create({})