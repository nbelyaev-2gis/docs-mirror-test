workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
    
        
        navi = container "Navigation" "Enables building routes with a large number of points" {
            
            back = group "Server side" {
                dmasync = component "Distance Matrix Async API" "Handles routing requests for large number of points"
                
                ncastle = component "Navi-Castle" "Manages data for routing requests"
                nback = component "Navi-Back" "Processes requests"
                nattractor = component "Navi-Attractor" "Attacts points to a graph"
                
                kafka = component "Apache Kafka" "Event data storage" "" "storage"
                postgresql = component "PostgreSQL" "Data storage" "" "storage"
                s3 = component "S3 compatible storage" "Data storage" "" "storage"
                
            }
            
            dmasync -> postgresql "Stores request states at"
            dmasync -> s3 "Stores request data at and gets results from"
            dmasync -> kafka 
            dmasync -> ncastle
            
            nback -> kafka 
            nback -> s3 
            nback -> ncastle
            
            nattractor -> ncastle "Gets request type from"
            nattractor -> kafka
            nattractor -> s3
            
            }


            
            
        
        


            
        }

    
    }
    
    views {
    
        component softwareSystem.navi "components" {
            include element.type==component
            autolayout lr 400 300
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
                opacity 70
            }
            element "nfocus" {
                opacity 70
            }
        }
    }

}