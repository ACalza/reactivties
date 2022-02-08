import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid, List } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityList from './ActivityList';


function ActivityDashboard() {
    const { activityStore } = useStore();

    useEffect(() => {
      activityStore.loadActivities()
    }, [activityStore]);
  
  
    if (activityStore.loadingInitial) return <LoadingComponent />
  

    return (
        <Grid>
            <Grid.Column width='10'>
                <List>
                    <ActivityList />
                </List>
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard);