cube(`SchemaMigrations`, {
  sql: `SELECT * FROM public.schema_migrations`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    version: {
      sql: `version`,
      type: `string`
    }
  }
});
