// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={`${username}-avatar`} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewData = reviewsList[activeReviewIndex]
    return (
      <div className="app-container">
        <button className="btn" type="button" onClick={this.onClickLeftArrow}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <div className="detail">
          <h1>Reviews</h1>
          {this.renderActiveReview(currentReviewData)}
        </div>
        <button className="btn" type="button" onClick={this.onClickRightArrow}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
