cube(`Users`, {
  sql: `SELECT * FROM public.users`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [availableDate, username, dueDate, name, id, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    birthcenter: {
      sql: `birthcenter`,
      type: `string`
    },
    
    isDoula: {
      sql: `is_doula`,
      type: `string`
    },
    
    preferredAptTime: {
      sql: `preferred_apt_time`,
      type: `string`
    },
    
    certified: {
      sql: `certified`,
      type: `string`
    },
    
    county1: {
      sql: `county_1`,
      type: `string`,
      title: `County 1`
    },
    
    hospitalBirth: {
      sql: `hospital_birth`,
      type: `string`
    },
    
    availableDate: {
      sql: `available_date`,
      type: `string`
    },
    
    bio: {
      sql: `bio`,
      type: `string`
    },
    
    postpartumDoula: {
      sql: `postpartum_doula`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    dueDate: {
      sql: `due_date`,
      type: `string`
    },
    
    county2: {
      sql: `county_2`,
      type: `string`,
      title: `County 2`
    },
    
    birthDoula: {
      sql: `birth_doula`,
      type: `string`
    },
    
    county3: {
      sql: `county_3`,
      type: `string`,
      title: `County 3`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    price: {
      sql: `price`,
      type: `string`
    },
    
    lastInitial: {
      sql: `last_initial`,
      type: `string`
    },
    
    passwordDigest: {
      sql: `password_digest`,
      type: `string`
    },
    
    birthday: {
      sql: `birthday`,
      type: `string`
    },
    
    specialty: {
      sql: `specialty`,
      type: `string`
    },
    
    picture: {
      sql: `picture`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    homebirth: {
      sql: `homebirth`,
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
