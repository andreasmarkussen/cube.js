import React from "react";
import Grid from "@material-ui/core/Grid";

import ChartRenderer from "../components/ChartRenderer";
import DashboardItem from "../components/DashboardItem";
import OverTimeChart from "../components/OverTimeChart";
import Chart from "../components/Chart";

const queries = {
  usersOvertime: {
    chartType: 'line',
    legend: false,
    query: {
      measures: ['Sessions.usersCount'],
      timeDimensions: [{
        dimension: 'Sessions.sessionStart',
        granularity: 'day'
      }]
    }
  },

  usersCount: {
    chartType: 'number',
    query: {
      measures: ['Sessions.usersCount']
    }
  },

  sessionsCount: {
    chartType: 'number',
    query: {
      measures: ['Sessions.count']
    }
  },

  newUsersCount: {
    chartType: 'number',
    query: {
      measures: ['Sessions.newUsersCount']
    }
  },

  bounceRate: {
    chartType: 'number',
    query: {
      measures: ['Sessions.bounceRate']
    }
  },

  averageDuration: {
    chartType: 'number',
    query: {
      measures: ['Sessions.averageDurationSeconds']
    }
  },

  averageNumberSessions: {
    chartType: 'number',
    query: {
      measures: ['Users.averageNumberSessions']
    }
  },

  usersByType: {
    chartType: 'pie',
    query: {
      measures: ['Sessions.usersCount'],
      dimensions: ['Sessions.type']
    }
  }
};


const AudiencePage = ({ withTime }) => {
  return (
    <>
      <Grid item xs={12}>
        <OverTimeChart
          title="Users Over Time"
          vizState={withTime(queries.usersOvertime)}
        />
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Chart title="Users" vizState={withTime(queries.usersCount)} />
          </Grid>
          <Grid item xs={6}>
            <Chart title="New Users" vizState={withTime(queries.newUsersCount)} />
          </Grid>
          <Grid item xs={6}>
            <Chart title="Sessions" vizState={withTime(queries.sessionsCount)} />
          </Grid>
          <Grid item xs={6}>
            <Chart title="Bounce Rate" vizState={withTime(queries.bounceRate)} />
          </Grid>
          <Grid item xs={6}>
            <Chart title="Avg. Session Duration" vizState={withTime(queries.averageDuration)} />
          </Grid>
          <Grid item xs={6}>
            <Chart title="# of Sessions per User" vizState={withTime(queries.averageNumberSessions)} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <DashboardItem title="Users by Type">
          <ChartRenderer vizState={queries.usersByType} />
        </DashboardItem>
      </Grid>
    </>
  );
}

export default AudiencePage;