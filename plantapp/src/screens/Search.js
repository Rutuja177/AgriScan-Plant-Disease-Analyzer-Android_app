import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Platform,
  Linking,
} from 'react-native';
import axios from 'axios';

export default class Search extends React.Component {
  state = { data: [], todo: [] };

  componentWillMount() {}

  test = [];

  renderDatam() {
    return this.state.data.map(res => {
      <Text>Data</Text>;
    });
  }

  render() {
    return (
      <View style={{ flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',}}>
        <View
          style={{
            height: 100,
            marginHorizontal: 10,
            flexDirection: 'row',
            borderRadius: 22,
            padding: 8,
          }}>
          <View style={{ justifyContent: 'center', flex: 4, marginRight: 8 }}>
            <TextInput
              style={{
                height: 45,
                backgroundColor: '#f4f4f4',
                borderRadius: 20,
                marginRight: 8,
                paddingLeft: 8,
              }}
              value={this.state.todo}
              onChangeText={v => this.setState({ todo: v })}
              placeholder={'Search'}
            />
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Button
              title="Search"
              onPress={() => {
                if (this.state.todo == '') {
                  alert('You need to search something!!');
                } else {
                  axios
                    .get(
                      'https://www.googleapis.com/customsearch/v1?cx=010987047032419380671%3Azu3fnejdxjy&key=AIzaSyCVm0yQPFxy4UK4gzhlC52EWj_PiHTW1RU&q=' +
                        this.state.todo +
                        '&start=1'
                    )
                    .then(response =>
                      this.setState({ data: response.data.items })
                    );

                  this.setState({ todo: '' });
                }
              }}
              style={{ borderRadius: 20 }}
            />
          </View>
        </View>
        <ScrollView>
          {this.state.data.map(xal => {
            return (
              <View
                style={{
                  height: 100,
                  justifyContent: 'center',
                  backgroundColor: '#f4f4f4',
                  margin: 8,
                  borderRadius: 12,
                  paddingLeft: 18,
                  borderColor: 'gray',
                  borderWidth: 1,
                }}>
                <Text style={{ fontSize: 24, alignItems: 'center' }}>
                  {xal.title}
                </Text>
                <Text
                  onPress={() => {
                    Linking.openURL(`${xal.link}`);
                  }}>
                  {xal.link}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
