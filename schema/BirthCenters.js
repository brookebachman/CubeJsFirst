cube(`BirthCenters`, {
  sql: `SELECT * FROM public.birth_centers`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, placeId, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    photo: {
      sql: `photo`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    placeId: {
      sql: `place_id`,
      type: `string`
    },
    
    address: {
      sql: `address`,
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
