// import React from 'react';
// import {
//     Timeline,
//     TimelineItem,
//     TimelineSeparator,
//     TimelineConnector,
//     TimelineContent,
//     TimelineDot
// } from '@mui/lab';
// import './JobTimeline.css'

// function JobTimeline({jobs, className}) {
//     return (
//         <div className={className ? className : null}>
//             <Timeline className="timeline" position="alternate">
//                 { jobs.map((item, index) => {
//                     return (
//                         <TimelineItem>
//                             <TimelineSeparator>
//                                 <TimelineDot variant="filled" />
//                                 <TimelineConnector />
//                             </TimelineSeparator>
//                             <TimelineContent>
//                                 <p className="job-duration">{item.duration}</p>
//                                 <p className="job-title">{item.name}</p>
//                                 <p className="org-name">{item.organisation}</p>
//                                 <p className="job-desc">{item.description}</p>
//                             </TimelineContent>
//                         </TimelineItem>
//                     )
//                 })}
//             </Timeline>
//         </div>
//     )
// }

// export default JobTimeline
