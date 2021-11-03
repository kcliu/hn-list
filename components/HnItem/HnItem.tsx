import React, {useEffect, useState} from 'react';
import styles from '../../styles/HnItem.module.css';
import {NewWindowButton} from '../NewWindowButton/NewWindowButton';
import {LoadingIcon} from "../LoadingIcon/LoadingIcon";

interface Story {
    by: string
    url: string
    title: string
}

export const HnItem = ({storyId}: { storyId: number }) => {
    const [isLoading, setLoading] = useState(false)
    const [story, setStory] = useState<Story | undefined>(undefined)

    useEffect(() => {
        setLoading(true)
        fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`, {method: "GET"})
            .then(res => res.json())
            .then(res => {
                setLoading(false)
                setStory(res)
            })
    }, [setStory])

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <LoadingIcon/>
            </div>

        )
    }

    return (<div className={styles.container}>
        <div className={styles.title}>{story?.title}</div>
        <div className={styles.authorWrapper}>
            <div className={styles.author}>{story?.by}</div>
            <NewWindowButton link={story?.url}/>
        </div>

    </div>)
}