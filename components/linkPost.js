import Link from 'next/link';

const LinkPost = props => {
    return(
        <li>
            <Link href="/post/[id]" as={`/post/${encodeURI(props.id)}`}>
                <a>{props.id}</a>
            </Link>
        </li>
    )
}

export default LinkPost;