import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';

class BlogShow extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params._id);
  }


  renderImage() {
    const { imageUrl } = this.props.blog;

    console.log(`https://asmovic-adv-ci-blog.s3.amazonaws.com/${imageUrl}`);
    debugger;
    if (imageUrl) {
      /* return <img src={`https://asmovic-advanced-blog.s3.us-east-2.amazonaws.com/${imageUrl}`} /> */
      console.log('uploading your image')
      return <img style={{ width: '30%' }} src={`https://asmovic-adv-ci-blog.s3.amazonaws.com/${imageUrl}`} />
    }

  }
  render() {
    if (!this.props.blog) {
      return '';
    }

    const { title, content } = this.props.blog;

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        {this.renderImage()}
      </div>
    );
  }
}

function mapStateToProps({ blogs }, ownProps) {
  return { blog: blogs[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchBlog })(BlogShow);
