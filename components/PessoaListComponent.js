import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
  LinearProgress
} from '@rneui/themed'

import * as pessoaService from '../service/PessoaService'
const PessoaListComponent = () => {
  // const [pessoas, setPessoas] = useState([])
  const [state, setState] = useState({
    pessoas: []
  })

  const updateList = async () => {
    setState({pessoas: (await pessoaService.obterLista()).data.items})
  }

  useEffect(() => {
    const go = async () => {
      await updateList()
    }
    go()
  }, [])
  return (
    <View>
      {
        state.pessoas.length > 0 ?
          <Text>Tem alguma coisa</Text>
        :
        <LinearProgress/>
      }
    </View>
  )
}

export default PessoaListComponent

const styles = StyleSheet.create({})