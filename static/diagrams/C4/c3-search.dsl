workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
    
        
        search = container "Search services" {
            
            front = group "Frontend side" {
                webapp = component "Web Application" "Interface for search queries"
                mobilesdk = component "Mobile SDK" "Interface for search queries"
            }
            
            back = group "Server side" {
                searchapi = component "Search API" "Search engine that processes requests"
                catalogapi = component "Catalog APIs" "RESTful API provider"
                postgresql = component "PostgreSQL" "Object data storage" "" "storage"
            }
            
            webapp -> catalogapi "Sends user requests via RESTful API to"
            mobilesdk -> catalogapi "Sends application requests via RESTful API to"
            catalogapi -> postgresql "Stores object data at"
            catalogapi -> searchapi "Sends search requests to"
            
            }
            
            keys = container "API Keys service" {
                kback = component "API Keys backend" "Manages API keys" "" "nfocus"
            }
            
            license = container "License service" {
                lback = component "License service" "Provides access to On-Premise services" "" "nfocus"
            }
            
            search.catalogapi -> keys.kback "Sends request metadata to"
            search.catalogapi -> license.lback "Validates user license via"
            
            
            

            
        }
    
    }
    
    views {
    
        component softwareSystem.search "components" {
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