import React from 'react'
import { If } from 'react-if'
import { Blog } from '../services/BlogService';

class BlogPost extends React.Component<any, any> {

    public state = {
        post: null,
    }

    componentDidMount(): void {
        const nid = this.props.match.params.id

        Blog.getPost(nid).then((post: any) => {
            this.setState({
                post: post,
            })
        })
    }

    render() {
        let post: any = this.state.post

        console.log(post)

        if (post === null) {
            return <></>
        }

        return <If condition={post !== null}>
            <div className="container mb-5">
                <div className={'row'}>
                    <div className={'col-10 mx-auto'}>
                        <h2>{post.title[0].value}</h2>
                        {/*<img src={news.field_image[0].url} width={'100%'} className={'my-3 mb-5'}/>*/}
                        <div dangerouslySetInnerHTML={{ __html: post.body[0].value }}/>
                    </div>
                </div>
            </div>
        </If>
    }
}

export default BlogPost
