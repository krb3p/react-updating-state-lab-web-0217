import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor () {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.bitrateClick = this.bitrateClick.bind(this)
    this.resolutionClick = this.resolutionClick.bind(this)
  }

  bitrateClick () {
    this.setState ({
      settings: Object.assign ({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  resolutionClick () {
    this.setState( {
      settings: Object.assign ({}, this.state.settings, {
        video: Object.assign ({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    })
  }

  render() {
    return (
      <div>
          <button className="bitrate" onClick={this.bitrateClick}>Change bitrate</button>
          <button className="resolution" onClick={this.resolutionClick}>Change resolution</button>
        </div>

    )
  }

}
