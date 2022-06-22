import { Box, LinearProgress, Typography } from '@mui/material';
import { memo } from 'react';
import { getProgressType, PROGRESS_FONT, PROGRESS_VARIANT, TYPOGRAPHY_VARIANT } from '../../../services';

const Status = (props) => {
    const { progress, cost, budget, statusTitle, statusDescription } = { ...props };
    return (
        <div className='status-wrapper'>
            <div className='left'>
                <div className={`progress-wrapper ${getProgressType(progress)}`}>
                    <LinearProgress variant={PROGRESS_VARIANT} value={progress} />
                    <Box>
                        <Typography variant={TYPOGRAPHY_VARIANT} color={PROGRESS_FONT}>{`${Math.round(
                            progress,
                        )}%`}</Typography>
                    </Box>
                </div>
                <div className='stats'>
                    <div>cost: {cost} DBUs</div>
                    <div>budget: {budget} DBUs</div>
                </div>
            </div>
            <div className='right'>
                <div><strong>{statusTitle}</strong></div>
                <div>{statusDescription}</div>
            </div>
        </div>
    );
};

export default memo(Status);