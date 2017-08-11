/**
 * Created by roy on 2017/8/10.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';

import TitleBar from '../components/TitleBar';

export default class SaleBar extends Component {

    static defaultProps = {
        benefit: null,
    }

    render() {
        var benefitData = this.props.benefit;
        var benefitItem = benefitData.benefitItem;
        var benefitItems = benefitItem.items;

        return (
            <View style={styles.container}>
                {/*顶部标题*/}
                <TitleBar left_text={benefitData.title} right_text={benefitData.descrption}/>
                {/*内容部分*/}
                <View style={styles.bottom}>
                    {/*左边*/}
                    {this.renderLeft(benefitItem)}

                    {/*右边*/}
                    {this.renderRight(benefitItems)}
                </View>
            </View>
        );
    }

    /**
     * 渲染左侧
     * @param benefitItem
     */
    renderLeft(benefitItem) {

        return <View style={styles.left}>
            <View><Image style={styles.left_img} source={{uri:benefitItem.imageUrl}}/></View>

            <Text style={{fontSize:14,marginLeft:10,marginRight:10,marginTop:5,marginBottom:5,}}
                  numberOfLines={2}>
                {benefitItem.title}·{benefitItem.descrption}
            </Text>

            <View style={{alignItems:'center',flexDirection:'row',marginLeft:10,marginRight:10,}}>
                <Text style={{color:'#F9961F',marginRight:5,}}>¥{benefitItem.marketPrice}起</Text>

                <Text style={{
                    backgroundColor:'#F9961F',
                    height:13,
                    lineHeight:13,
                    textAlign:'center',
                    color:'white',
                    borderRadius:8,
                    fontSize:11,
                    paddingLeft:4,
                    paddingRight:4,}}>
                    省 ¥ {benefitItem.marketPrice - benefitItem.price}
                </Text>
            </View>
        </View>
    }

    /**
     * 渲染右侧
     * @param benefitItems
     */
    renderRight(benefitItems) {

        return <View style={styles.right}>
            {/*上边*/}
            <View style={styles.right_top}>
                <View style={{marginLeft:10,marginRight:5}}>
                    <Text style={{marginBottom:5,marginTop:15}}>{benefitItems[0].title}</Text>
                    <Text style={{marginBottom:10}}>{benefitItems[0].descrption}</Text>
                </View>
                <View>
                    <Image style={{width:50,height:50,}} source={{uri:benefitItems[0].imageUrl}}/>
                </View>
            </View>
            {/*下边*/}
            <View style={{flex:1,flexDirection:'row',marginTop:2,}}>
                {/*左边*/}
                {this.renderItem(benefitItems[1])}
                {/*右边*/}
                {this.renderItem(benefitItems[2])}
            </View>
        </View>

    }

    renderItem(item){
        return <View style={{flex:1,backgroundColor: '#f8f8f8',alignItems:'center',marginRight:2,}}>
            <Text>{item.title}</Text>
            <Text>{item.descrption}</Text>
            <Image style={{width:50,height:50,}} source={{uri:item.imageUrl}}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f8f8f8',
    },
    bottom: {
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 5,
    },
    left: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        marginRight: 3,
    },
    left_img: {
        flex: 1,
        width: 200,
        height: 90,
    },
    right: {
        flex: 1,
    },
    right_top:{
        flex:1,
        flexDirection:'row',
        backgroundColor: '#f8f8f8',
        alignItems:'center',
        marginRight:2,
    },
});