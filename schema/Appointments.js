cube(`Appointments`, {
  sql: `SELECT * FROM public.appointments`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [date, id, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    date: {
      sql: `date`,
      type: `string`
    },
    
    time: {
      sql: `time`,
      type: `string`
    },
    
    confirmed: {
      sql: `confirmed`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    }
  }
});
