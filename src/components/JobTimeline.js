import React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot
} from '@mui/lab';
import './JobTimeline.css'

function JobTimeline({jobs}) {
    return (
        <Timeline className="timeline" position="alternate">
            { jobs.map((item, index) => {
                return (
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className="job-duration">{item.duration}</p>
                            <p className="job-title">{item.name}</p>
                            <p className="org-name">{item.organisation}</p>
                            <p className="job-desc">{item.description}</p>
                        </TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    )
}

export default JobTimeline
