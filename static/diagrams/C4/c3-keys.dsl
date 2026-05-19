workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
    
        
        keyservice = container "API Keys service" "Manages API Keys" {
            
            front = group "Frontend side" {
                adminapp = component "API Keys admin interface" "Issues and manages API keys"
            }
            
            back = group "Server side" {
                keys = component "API Keys backend" "Communicates with On-Premise services via RESTful API"
                kafka = component "Apache Kafka" "Event data storage" "" "storage"
                redis = component "Redis" "Counter data storage" "" "storage"
                postgresql = component "PostgreSQL" "Keys and metadata storage" "" "storage"
                tasker = component "Tasker" "Operates on keys"
            }
            
            adminapp -> keys "Sends admin request metadata to"
            keys -> kafka "Stores keys-related events at"
            keys -> redis "Stores counts of keys usage at"
            keys -> postgresql "Stores keys and related data at"
            keys -> tasker "Sends event data to"
            
            }
            
            other = container "On-Premise" {
                services = component "Other On-Premise services" "" "" "nfocus"
            }
            
            auth = container "LDAP" {
                ldap = component "LDAP server" "Authentication server" "" "external"
            }
            
            keyservice.keys -> auth.ldap "Authenticates admins via"
            other.services -> keyservice.keys "Validate API keys status using"
            
        }
    
    }
    
    views {
    
        component softwareSystem.keyservice "components" {
            include element.type==component
            autolayout lr 500 100
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