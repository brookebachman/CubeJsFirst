cube(`ArInternalMetadata`, {
  sql: `SELECT * FROM public.ar_internal_metadata`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [createdAt, updatedAt]
    }
  },
  
  dimensions: {
    key: {
      sql: `key`,
      type: `string`
    },
    
    value: {
      sql: `value`,
      type: `string`
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
