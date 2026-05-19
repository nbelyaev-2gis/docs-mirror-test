workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
    
        
        pro = container "On-Premise Pro" {
            
            front = group "Frontend side" {
                proui = component "Pro UI" "React web application"
            }
            
            back = group "Server side" {
                proapi = component "Pro API" "RESTful API for obtaining data and metadata"
                importer = component "assetImporter" "Сron job for importing datasets"
                preparer = component "assetPreparer" "Сron job to prepare external datasets for import"
                redis = component "Redis" "Cache storage" "" "storage"
                elastic = component "Elasticsearch" "Database with search and analytics engine" "" "storage"
                kafka = component "Apache Kafka" "Event data storage" "" "storage"
                s3 = component "S3 compatible storage" "Storage of prepared datasets from external sources" "" "storage"
                postgresql = component "PostgreSQL" "Metadata storage" "" "storage"
            }
            
            proapi -> proui "Sends data to be displayed at"
            preparer -> s3 "Stores external data at"
            importer -> s3 "Gets prepared data from"
            importer -> elastic "Loads prepared data to"
            proapi -> redis
            proapi -> postgresql
            proapi -> elastic
            proapi -> kafka
            }
            
            keys = container "API Keys service" {
                kback = component "API Keys service" "Manages API keys" "" "nfocus"
            }
            
            pro.proapi -> keys.kback 
            
            
            auth = container "Authentication service" {
                keycloak = component "Auth API" "System implementation of Keycloak"
            }
            
            pro.proui -> auth.keycloak "Authenticates On-Premise Pro users via"
            
            license = container "License service" {
                pasportool = component "License service" "Validates On-Premise license" "" "nfocus"
            }
            
            pro.proapi -> license.pasportool 
            
        }
    
    }
    
    views {
    
        component softwareSystem.pro "components" {
            include element.type==component
            autolayout lr 400 200
        }
        
        
       styles {
            element "Element" {
                background #1168bd
                color #ffffff
            }
            element "storage" {
                shape cylinder
                background #dddddd
                color #000000
            }
            element "external" {
                background green
                color white
                opacity 70
            }
            element "nfocus" {
                opacity 70
            }
        }
    }

}