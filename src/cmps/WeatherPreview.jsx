import React from 'react'
import { connect } from 'react-redux'
import WeatherCard from './WeatherCard'

export const weatherPreview = (props) => {
    const locationInfo = props.data
    if(!locationInfo) return <div>no</div>
    return (
        <div>
            <div className='days-list'>
                {locationInfo.days.map((day) =>  <WeatherCard day={day} key={day.date}></WeatherCard>)}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.weatherModule.data
    }
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(weatherPreview)